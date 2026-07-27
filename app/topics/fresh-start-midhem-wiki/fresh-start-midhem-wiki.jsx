import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-wiki');
}

export default function FreshStartMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-wiki" />;
}
