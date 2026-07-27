import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-wiki');
}

export default function LowrateCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-wiki" />;
}
