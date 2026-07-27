import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-server');
}

export default function BestMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-server" />;
}
