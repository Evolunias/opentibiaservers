import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-client');
}

export default function Tibia13SeasonalClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-client" />;
}
