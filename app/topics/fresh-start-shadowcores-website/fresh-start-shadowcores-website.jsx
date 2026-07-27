import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-website');
}

export default function FreshStartShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-website" />;
}
