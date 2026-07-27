import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-wiki');
}

export default function CurrentMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-wiki" />;
}
