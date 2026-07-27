import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-website');
}

export default function ActiveShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-website" />;
}
