import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-server');
}

export default function Tibia100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-server" />;
}
