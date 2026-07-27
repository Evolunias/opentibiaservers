import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-wiki');
}

export default function LowrateOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-wiki" />;
}
