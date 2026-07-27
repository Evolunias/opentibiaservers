import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-wiki');
}

export default function BaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-wiki" />;
}
