import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-seasonal-server');
}

export default function Tibiara13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-seasonal-server" />;
}
