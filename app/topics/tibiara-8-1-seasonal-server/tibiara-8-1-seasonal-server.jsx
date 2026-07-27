import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-seasonal-server');
}

export default function Tibiara81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-seasonal-server" />;
}
