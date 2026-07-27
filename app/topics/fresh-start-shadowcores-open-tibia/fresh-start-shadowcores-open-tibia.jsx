import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-open-tibia');
}

export default function FreshStartShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-open-tibia" />;
}
