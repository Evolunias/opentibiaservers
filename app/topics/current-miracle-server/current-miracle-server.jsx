import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-server');
}

export default function CurrentMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-server" />;
}
