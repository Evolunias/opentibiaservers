import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-midhem-server');
}

export default function PvpeMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-midhem-server" />;
}
