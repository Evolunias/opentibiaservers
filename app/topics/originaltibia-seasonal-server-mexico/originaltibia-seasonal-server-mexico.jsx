import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-mexico');
}

export default function OriginaltibiaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-mexico" />;
}
