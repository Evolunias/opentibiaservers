import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-open-tibia');
}

export default function NewShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-open-tibia" />;
}
