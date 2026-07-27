import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-uk');
}

export default function BaiakWikiUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-uk" />;
}
