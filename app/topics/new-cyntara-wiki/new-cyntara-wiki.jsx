import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-wiki');
}

export default function NewCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-wiki" />;
}
