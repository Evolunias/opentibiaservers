import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-website');
}

export default function ShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-website" />;
}
