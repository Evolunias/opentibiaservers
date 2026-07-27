import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-poland');
}

export default function KasteriaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-poland" />;
}
