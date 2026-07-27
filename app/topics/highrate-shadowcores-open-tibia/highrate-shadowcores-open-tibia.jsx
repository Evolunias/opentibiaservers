import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-open-tibia');
}

export default function HighrateShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-open-tibia" />;
}
