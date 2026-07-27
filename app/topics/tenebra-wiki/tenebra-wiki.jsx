import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-wiki');
}

export default function TenebraWikiKeywordPage() {
  return <StaticKeywordPage slug="tenebra-wiki" />;
}
