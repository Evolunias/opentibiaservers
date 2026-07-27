import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-wiki');
}

export default function OfficialTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-wiki" />;
}
