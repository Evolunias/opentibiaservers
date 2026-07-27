import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-ot');
}

export default function NewSeasonShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-ot" />;
}
