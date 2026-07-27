import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-website');
}

export default function LowrateShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-website" />;
}
