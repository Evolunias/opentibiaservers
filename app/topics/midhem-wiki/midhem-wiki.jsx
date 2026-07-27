import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-wiki');
}

export default function MidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="midhem-wiki" />;
}
