import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-private-server');
}

export default function CustomMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-private-server" />;
}
