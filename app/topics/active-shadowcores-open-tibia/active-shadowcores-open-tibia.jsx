import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-open-tibia');
}

export default function ActiveShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-open-tibia" />;
}
