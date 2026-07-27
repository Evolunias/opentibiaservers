import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-open-tibia');
}

export default function PopularShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-open-tibia" />;
}
