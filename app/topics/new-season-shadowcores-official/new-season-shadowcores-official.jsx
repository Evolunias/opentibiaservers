import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-official');
}

export default function NewSeasonShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-official" />;
}
