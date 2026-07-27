import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-wiki');
}

export default function TrimeraWikiKeywordPage() {
  return <StaticKeywordPage slug="trimera-wiki" />;
}
