import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-wiki');
}

export default function KyraWikiKeywordPage() {
  return <StaticKeywordPage slug="kyra-wiki" />;
}
