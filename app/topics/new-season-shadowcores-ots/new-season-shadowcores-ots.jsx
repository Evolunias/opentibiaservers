import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-ots');
}

export default function NewSeasonShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-ots" />;
}
