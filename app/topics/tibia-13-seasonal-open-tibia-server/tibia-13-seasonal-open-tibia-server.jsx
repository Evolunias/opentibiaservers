import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-open-tibia-server');
}

export default function Tibia13SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-open-tibia-server" />;
}
