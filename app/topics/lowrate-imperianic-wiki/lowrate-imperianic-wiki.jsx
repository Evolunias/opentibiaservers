import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-wiki');
}

export default function LowrateImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-wiki" />;
}
