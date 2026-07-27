import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-wiki');
}

export default function CustomCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-wiki" />;
}
