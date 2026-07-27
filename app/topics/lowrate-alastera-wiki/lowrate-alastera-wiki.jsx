import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-wiki');
}

export default function LowrateAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-wiki" />;
}
