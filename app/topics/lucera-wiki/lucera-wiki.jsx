import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-wiki');
}

export default function LuceraWikiKeywordPage() {
  return <StaticKeywordPage slug="lucera-wiki" />;
}
