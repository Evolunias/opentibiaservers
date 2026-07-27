import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-wiki');
}

export default function TopCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-wiki" />;
}
