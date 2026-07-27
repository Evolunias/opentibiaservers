import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-wiki');
}

export default function NewBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-wiki" />;
}
