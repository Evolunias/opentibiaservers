import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-open-tibia-server');
}

export default function Tibia100SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-open-tibia-server" />;
}
