import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-wiki');
}

export default function NoResetClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-wiki" />;
}
