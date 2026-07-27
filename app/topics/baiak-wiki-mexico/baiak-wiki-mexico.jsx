import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-mexico');
}

export default function BaiakWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-mexico" />;
}
