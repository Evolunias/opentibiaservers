import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-wiki');
}

export default function CurrentTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-wiki" />;
}
