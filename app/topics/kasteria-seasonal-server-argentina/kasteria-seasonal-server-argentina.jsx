import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-argentina');
}

export default function KasteriaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-argentina" />;
}
