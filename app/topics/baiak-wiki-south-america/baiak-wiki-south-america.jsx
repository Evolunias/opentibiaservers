import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-south-america');
}

export default function BaiakWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-south-america" />;
}
