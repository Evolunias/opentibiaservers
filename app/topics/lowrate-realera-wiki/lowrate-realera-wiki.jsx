import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-wiki');
}

export default function LowrateRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-wiki" />;
}
