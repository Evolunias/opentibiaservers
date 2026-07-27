import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-website');
}

export default function CustomShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-website" />;
}
