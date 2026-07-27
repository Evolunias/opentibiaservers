import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-ot-server');
}

export default function Tibia84SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-ot-server" />;
}
