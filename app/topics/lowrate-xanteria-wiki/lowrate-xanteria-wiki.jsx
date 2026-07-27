import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-wiki');
}

export default function LowrateXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-wiki" />;
}
