import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores');
}

export default function OldSchoolShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores" />;
}
