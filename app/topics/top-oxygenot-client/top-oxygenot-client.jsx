import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-client');
}

export default function TopOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-client" />;
}
