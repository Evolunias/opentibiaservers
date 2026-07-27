import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-official');
}

export default function OldSchoolShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-official" />;
}
