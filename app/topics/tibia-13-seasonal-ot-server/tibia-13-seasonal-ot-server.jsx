import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-ot-server');
}

export default function Tibia13SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-ot-server" />;
}
