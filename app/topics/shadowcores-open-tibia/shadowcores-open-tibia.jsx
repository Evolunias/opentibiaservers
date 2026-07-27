import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-open-tibia');
}

export default function ShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-open-tibia" />;
}
