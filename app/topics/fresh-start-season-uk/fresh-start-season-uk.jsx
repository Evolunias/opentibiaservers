import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-uk');
}

export default function FreshStartSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-uk" />;
}
