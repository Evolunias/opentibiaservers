import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-wiki');
}

export default function TopUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="top-unline-wiki" />;
}
