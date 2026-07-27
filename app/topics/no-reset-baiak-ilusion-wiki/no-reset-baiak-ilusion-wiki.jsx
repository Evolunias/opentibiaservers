import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-wiki');
}

export default function NoResetBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-wiki" />;
}
