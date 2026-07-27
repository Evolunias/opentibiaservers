import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-europe');
}

export default function FreshStartSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-europe" />;
}
