import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-sweden');
}

export default function BaiakWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-sweden" />;
}
