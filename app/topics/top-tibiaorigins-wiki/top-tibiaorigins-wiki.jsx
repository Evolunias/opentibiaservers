import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-wiki');
}

export default function TopTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-wiki" />;
}
