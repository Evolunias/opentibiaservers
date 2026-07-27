import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-wiki');
}

export default function LowrateNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-wiki" />;
}
