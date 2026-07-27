import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-wiki');
}

export default function LowrateThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-wiki" />;
}
