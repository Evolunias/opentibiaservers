import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-client');
}

export default function HighrateCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-client" />;
}
