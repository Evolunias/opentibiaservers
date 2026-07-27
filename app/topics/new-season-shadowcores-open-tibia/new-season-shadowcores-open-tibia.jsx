import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-open-tibia');
}

export default function NewSeasonShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-open-tibia" />;
}
