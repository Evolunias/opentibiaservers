import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-website');
}

export default function TopShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-website" />;
}
