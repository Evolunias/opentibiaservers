import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-wiki');
}

export default function TibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-wiki" />;
}
