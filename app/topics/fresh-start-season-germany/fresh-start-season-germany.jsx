import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-germany');
}

export default function FreshStartSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-germany" />;
}
