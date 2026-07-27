import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-seasonal-server');
}

export default function Tibiara15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-seasonal-server" />;
}
