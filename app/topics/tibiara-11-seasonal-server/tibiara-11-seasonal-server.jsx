import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-seasonal-server');
}

export default function Tibiara11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-seasonal-server" />;
}
