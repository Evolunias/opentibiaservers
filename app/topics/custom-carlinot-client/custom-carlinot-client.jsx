import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-client');
}

export default function CustomCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-client" />;
}
