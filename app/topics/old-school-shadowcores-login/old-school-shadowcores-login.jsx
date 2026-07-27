import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-login');
}

export default function OldSchoolShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-login" />;
}
