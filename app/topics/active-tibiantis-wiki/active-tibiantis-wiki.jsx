import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-wiki');
}

export default function ActiveTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-wiki" />;
}
