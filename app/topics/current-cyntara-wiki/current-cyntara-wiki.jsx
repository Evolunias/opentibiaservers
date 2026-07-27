import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-wiki');
}

export default function CurrentCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-wiki" />;
}
