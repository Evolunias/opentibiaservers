import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-wiki');
}

export default function CustomMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-wiki" />;
}
