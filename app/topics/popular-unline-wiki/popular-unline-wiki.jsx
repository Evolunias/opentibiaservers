import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-wiki');
}

export default function PopularUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-wiki" />;
}
