import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-server');
}

export default function LowrateMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-server" />;
}
