import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-open-tibia');
}

export default function OldSchoolShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-open-tibia" />;
}
