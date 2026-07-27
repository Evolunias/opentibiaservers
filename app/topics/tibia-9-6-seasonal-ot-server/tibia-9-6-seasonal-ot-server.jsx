import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-ot-server');
}

export default function Tibia96SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-ot-server" />;
}
