import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-wiki');
}

export default function HighrateBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-wiki" />;
}
