import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-wiki');
}

export default function LowrateYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-wiki" />;
}
