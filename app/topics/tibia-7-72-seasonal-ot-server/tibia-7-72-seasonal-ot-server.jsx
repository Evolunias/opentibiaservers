import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-ot-server');
}

export default function Tibia772SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-ot-server" />;
}
