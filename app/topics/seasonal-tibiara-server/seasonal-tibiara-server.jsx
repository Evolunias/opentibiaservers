import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibiara-server');
}

export default function SeasonalTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibiara-server" />;
}
