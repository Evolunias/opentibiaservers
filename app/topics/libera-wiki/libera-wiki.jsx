import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-wiki');
}

export default function LiberaWikiKeywordPage() {
  return <StaticKeywordPage slug="libera-wiki" />;
}
