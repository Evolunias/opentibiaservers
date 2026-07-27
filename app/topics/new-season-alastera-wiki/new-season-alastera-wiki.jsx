import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-wiki');
}

export default function NewSeasonAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-wiki" />;
}
