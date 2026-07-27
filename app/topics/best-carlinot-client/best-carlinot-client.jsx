import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-client');
}

export default function BestCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-client" />;
}
