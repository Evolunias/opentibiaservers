import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-ots');
}

export default function OldSchoolShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-ots" />;
}
