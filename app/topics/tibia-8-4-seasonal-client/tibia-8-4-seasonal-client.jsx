import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-client');
}

export default function Tibia84SeasonalClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-client" />;
}
