import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-client');
}

export default function Tibia71SeasonalClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-client" />;
}
