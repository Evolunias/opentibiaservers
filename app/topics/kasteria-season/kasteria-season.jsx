import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-season');
}

export default function KasteriaSeasonKeywordPage() {
  return <StaticKeywordPage slug="kasteria-season" />;
}
