import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-official');
}

export default function PopularShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-official" />;
}
