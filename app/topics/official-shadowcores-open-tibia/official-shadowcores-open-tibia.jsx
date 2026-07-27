import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-open-tibia');
}

export default function OfficialShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-open-tibia" />;
}
