import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-wiki');
}

export default function CustomTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-wiki" />;
}
