import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-client');
}

export default function Tibia12SeasonalClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-client" />;
}
