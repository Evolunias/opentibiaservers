import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-client');
}

export default function Tibia74SeasonalClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-client" />;
}
