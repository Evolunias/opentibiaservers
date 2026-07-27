import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-ot-server');
}

export default function Tibia11SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-ot-server" />;
}
