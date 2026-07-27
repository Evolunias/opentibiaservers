import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-ot-server');
}

export default function Tibia100SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-ot-server" />;
}
