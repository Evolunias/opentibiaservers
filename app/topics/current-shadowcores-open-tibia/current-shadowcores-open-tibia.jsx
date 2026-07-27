import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-open-tibia');
}

export default function CurrentShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-open-tibia" />;
}
