import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-usa');
}

export default function KasteriaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-usa" />;
}
