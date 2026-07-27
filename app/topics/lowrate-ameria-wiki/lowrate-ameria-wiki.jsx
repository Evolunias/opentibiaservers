import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-wiki');
}

export default function LowrateAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-wiki" />;
}
