import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-client');
}

export default function NewSeasonCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-client" />;
}
