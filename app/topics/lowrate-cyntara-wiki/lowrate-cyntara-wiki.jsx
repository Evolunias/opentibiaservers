import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-wiki');
}

export default function LowrateCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-wiki" />;
}
