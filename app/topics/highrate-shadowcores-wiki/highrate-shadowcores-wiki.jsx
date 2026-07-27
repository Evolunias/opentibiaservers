import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-wiki');
}

export default function HighrateShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-wiki" />;
}
