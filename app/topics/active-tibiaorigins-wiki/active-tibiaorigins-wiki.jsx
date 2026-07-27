import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-wiki');
}

export default function ActiveTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-wiki" />;
}
