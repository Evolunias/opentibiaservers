import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-argentina');
}

export default function BaiakWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-argentina" />;
}
