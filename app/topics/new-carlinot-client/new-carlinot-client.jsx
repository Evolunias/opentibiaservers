import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-client');
}

export default function NewCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-client" />;
}
