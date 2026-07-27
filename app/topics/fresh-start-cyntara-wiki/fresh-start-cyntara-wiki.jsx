import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-wiki');
}

export default function FreshStartCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-wiki" />;
}
