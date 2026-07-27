import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-website');
}

export default function CurrentShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-website" />;
}
