import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-wiki');
}

export default function LowrateRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-wiki" />;
}
