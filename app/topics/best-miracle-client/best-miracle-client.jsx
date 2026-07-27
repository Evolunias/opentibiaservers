import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-client');
}

export default function BestMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-client" />;
}
