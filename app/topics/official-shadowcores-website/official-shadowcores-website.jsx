import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-website');
}

export default function OfficialShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-website" />;
}
