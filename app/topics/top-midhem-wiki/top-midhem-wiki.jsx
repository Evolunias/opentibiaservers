import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-wiki');
}

export default function TopMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-wiki" />;
}
