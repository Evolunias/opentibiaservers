import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-client');
}

export default function ActiveCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-client" />;
}
