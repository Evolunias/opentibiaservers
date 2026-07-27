import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-wiki');
}

export default function InfernaWikiKeywordPage() {
  return <StaticKeywordPage slug="inferna-wiki" />;
}
