import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-client');
}

export default function TopCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-client" />;
}
