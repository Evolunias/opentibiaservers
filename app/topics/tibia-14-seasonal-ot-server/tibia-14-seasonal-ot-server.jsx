import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-ot-server');
}

export default function Tibia14SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-ot-server" />;
}
