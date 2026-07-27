import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-ot-server');
}

export default function Tibia74SeasonalOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-ot-server" />;
}
