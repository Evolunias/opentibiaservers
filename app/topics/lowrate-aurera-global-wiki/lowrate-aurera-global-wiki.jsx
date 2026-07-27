import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-wiki');
}

export default function LowrateAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-wiki" />;
}
