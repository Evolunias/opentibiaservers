import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-client');
}

export default function LowrateCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-client" />;
}
