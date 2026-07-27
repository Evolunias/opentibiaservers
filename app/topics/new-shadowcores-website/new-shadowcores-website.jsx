import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-website');
}

export default function NewShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-website" />;
}
