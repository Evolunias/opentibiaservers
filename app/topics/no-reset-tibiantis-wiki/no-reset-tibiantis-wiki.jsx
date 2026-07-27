import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-wiki');
}

export default function NoResetTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-wiki" />;
}
