import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-wiki');
}

export default function NoResetNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-wiki" />;
}
