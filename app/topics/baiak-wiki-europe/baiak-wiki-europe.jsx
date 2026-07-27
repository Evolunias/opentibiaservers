import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-europe');
}

export default function BaiakWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-europe" />;
}
