import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-website');
}

export default function PopularShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-website" />;
}
