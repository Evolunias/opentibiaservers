import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-north-america');
}

export default function BaiakWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-north-america" />;
}
