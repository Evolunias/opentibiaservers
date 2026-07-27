import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-open-tibia');
}

export default function LowrateShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-open-tibia" />;
}
