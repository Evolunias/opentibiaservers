import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-wiki');
}

export default function FreshStartAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-wiki" />;
}
