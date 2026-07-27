import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-germany');
}

export default function PvpeSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-germany" />;
}
