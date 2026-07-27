import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-wiki');
}

export default function TopTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-wiki" />;
}
