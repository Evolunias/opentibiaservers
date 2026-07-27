import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-germany');
}

export default function BaiakWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-germany" />;
}
