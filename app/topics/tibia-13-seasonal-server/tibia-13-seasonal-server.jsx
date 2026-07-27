import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-server');
}

export default function Tibia13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-server" />;
}
