import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-latin-america');
}

export default function FreshStartSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-latin-america" />;
}
