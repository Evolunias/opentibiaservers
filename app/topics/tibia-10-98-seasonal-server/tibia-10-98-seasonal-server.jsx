import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-seasonal-server');
}

export default function Tibia1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-seasonal-server" />;
}
