import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-latin-america');
}

export default function OriginaltibiaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-latin-america" />;
}
