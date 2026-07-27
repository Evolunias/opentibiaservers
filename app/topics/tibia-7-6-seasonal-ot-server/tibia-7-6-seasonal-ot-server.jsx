import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-ot-server');
}

export default function Tibia76SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-ot-server" />;
}
