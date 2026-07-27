import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-wiki');
}

export default function NoResetTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-wiki" />;
}
