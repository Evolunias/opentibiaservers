import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-website');
}

export default function BestShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-website" />;
}
