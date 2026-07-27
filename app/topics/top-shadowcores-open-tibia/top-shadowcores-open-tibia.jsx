import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-open-tibia');
}

export default function TopShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-open-tibia" />;
}
