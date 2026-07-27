import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-wiki');
}

export default function NoResetTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-wiki" />;
}
