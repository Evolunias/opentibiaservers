import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-poland');
}

export default function BaiakWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-poland" />;
}
