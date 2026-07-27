import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-client');
}

export default function HighrateOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-client" />;
}
