import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-wiki');
}

export default function LowrateKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-wiki" />;
}
