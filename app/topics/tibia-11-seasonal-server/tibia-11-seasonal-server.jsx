import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-server');
}

export default function Tibia11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-server" />;
}
