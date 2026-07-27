import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-wiki');
}

export default function PopularAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-wiki" />;
}
