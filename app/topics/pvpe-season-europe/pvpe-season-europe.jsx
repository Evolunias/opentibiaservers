import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-europe');
}

export default function PvpeSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-europe" />;
}
