import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-usa');
}

export default function BaiakWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-usa" />;
}
