import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-wiki');
}

export default function CustomOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-wiki" />;
}
