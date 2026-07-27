import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-client');
}

export default function Tibia11SeasonalClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-client" />;
}
