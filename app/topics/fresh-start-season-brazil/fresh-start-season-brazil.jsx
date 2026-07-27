import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-brazil');
}

export default function FreshStartSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-brazil" />;
}
