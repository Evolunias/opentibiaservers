import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-wiki');
}

export default function PopularTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-wiki" />;
}
