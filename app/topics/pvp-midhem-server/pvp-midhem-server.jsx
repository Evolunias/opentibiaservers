import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-midhem-server');
}

export default function PvpMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-midhem-server" />;
}
