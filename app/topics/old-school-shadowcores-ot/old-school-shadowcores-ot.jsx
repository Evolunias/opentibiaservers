import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-ot');
}

export default function OldSchoolShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-ot" />;
}
