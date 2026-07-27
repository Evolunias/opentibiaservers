import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-wiki');
}

export default function TopAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-wiki" />;
}
