import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-wiki');
}

export default function BestTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-wiki" />;
}
