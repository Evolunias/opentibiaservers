import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-poland');
}

export default function FreshStartSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-poland" />;
}
