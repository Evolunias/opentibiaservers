import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-register');
}

export default function OldSchoolShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-register" />;
}
