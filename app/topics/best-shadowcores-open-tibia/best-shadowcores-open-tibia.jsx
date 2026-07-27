import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-open-tibia');
}

export default function BestShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-open-tibia" />;
}
