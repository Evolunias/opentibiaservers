import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-private-server');
}

export default function LowrateMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-private-server" />;
}
