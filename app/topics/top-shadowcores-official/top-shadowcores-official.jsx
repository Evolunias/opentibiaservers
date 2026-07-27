import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-official');
}

export default function TopShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-official" />;
}
