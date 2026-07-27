import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-seasonal-server');
}

export default function Tibiara84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-seasonal-server" />;
}
