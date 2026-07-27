import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-seasonal-server');
}

export default function Tibiara12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-seasonal-server" />;
}
