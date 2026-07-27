import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-wiki');
}

export default function ActiveCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-wiki" />;
}
