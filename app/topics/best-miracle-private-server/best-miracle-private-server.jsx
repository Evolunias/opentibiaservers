import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-private-server');
}

export default function BestMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-private-server" />;
}
