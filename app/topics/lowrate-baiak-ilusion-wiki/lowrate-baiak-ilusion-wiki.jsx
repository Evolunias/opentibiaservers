import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-wiki');
}

export default function LowrateBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-wiki" />;
}
