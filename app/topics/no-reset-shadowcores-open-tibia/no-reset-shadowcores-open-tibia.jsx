import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-open-tibia');
}

export default function NoResetShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-open-tibia" />;
}
