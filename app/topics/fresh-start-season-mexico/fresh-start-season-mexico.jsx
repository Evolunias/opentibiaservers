import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-mexico');
}

export default function FreshStartSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-mexico" />;
}
