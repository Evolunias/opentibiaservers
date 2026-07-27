import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-canada');
}

export default function BaiakWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-canada" />;
}
