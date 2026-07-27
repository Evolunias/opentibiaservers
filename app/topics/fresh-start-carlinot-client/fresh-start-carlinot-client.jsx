import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-client');
}

export default function FreshStartCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-client" />;
}
