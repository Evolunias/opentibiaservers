import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-server');
}

export default function Tibia84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-server" />;
}
