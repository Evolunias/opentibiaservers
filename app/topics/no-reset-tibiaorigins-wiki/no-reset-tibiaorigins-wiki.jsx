import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-wiki');
}

export default function NoResetTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-wiki" />;
}
