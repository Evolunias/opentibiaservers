import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-wiki');
}

export default function HighrateTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-wiki" />;
}
