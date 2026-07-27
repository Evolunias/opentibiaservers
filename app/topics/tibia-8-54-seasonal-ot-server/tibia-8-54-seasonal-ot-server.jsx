import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-ot-server');
}

export default function Tibia854SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-ot-server" />;
}
