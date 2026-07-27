import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-client');
}

export default function Tibia15SeasonalClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-client" />;
}
