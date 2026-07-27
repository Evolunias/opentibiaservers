import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-wiki');
}

export default function CurrentUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="current-unline-wiki" />;
}
