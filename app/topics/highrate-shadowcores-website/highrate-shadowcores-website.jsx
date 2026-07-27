import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-website');
}

export default function HighrateShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-website" />;
}
