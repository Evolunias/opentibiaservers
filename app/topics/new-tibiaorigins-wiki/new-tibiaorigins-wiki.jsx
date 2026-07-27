import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-wiki');
}

export default function NewTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-wiki" />;
}
