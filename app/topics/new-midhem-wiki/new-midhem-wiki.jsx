import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-wiki');
}

export default function NewMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-wiki" />;
}
