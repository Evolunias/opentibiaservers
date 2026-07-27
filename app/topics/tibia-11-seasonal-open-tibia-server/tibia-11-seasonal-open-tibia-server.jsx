import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-open-tibia-server');
}

export default function Tibia11SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-open-tibia-server" />;
}
