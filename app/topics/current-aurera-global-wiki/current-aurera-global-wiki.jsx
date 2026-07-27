import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-wiki');
}

export default function CurrentAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-wiki" />;
}
