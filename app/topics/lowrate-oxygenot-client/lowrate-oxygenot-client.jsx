import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-client');
}

export default function LowrateOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-client" />;
}
