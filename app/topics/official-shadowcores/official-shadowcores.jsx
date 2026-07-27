import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores');
}

export default function OfficialShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores" />;
}
