import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-seasonal-server');
}

export default function Tibiara74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-seasonal-server" />;
}
