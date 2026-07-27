import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-client');
}

export default function PopularCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-client" />;
}
