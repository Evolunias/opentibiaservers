import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-midhem-server');
}

export default function NonPvpMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-midhem-server" />;
}
