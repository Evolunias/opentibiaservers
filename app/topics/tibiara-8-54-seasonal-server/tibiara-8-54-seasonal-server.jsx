import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-54-seasonal-server');
}

export default function Tibiara854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-54-seasonal-server" />;
}
