import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-wiki');
}

export default function FreshStartTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-wiki" />;
}
