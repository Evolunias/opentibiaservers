import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-open-tibia');
}

export default function CustomShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-open-tibia" />;
}
