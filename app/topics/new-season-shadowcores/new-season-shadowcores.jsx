import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores');
}

export default function NewSeasonShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores" />;
}
