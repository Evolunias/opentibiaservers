import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-register');
}

export default function OldSchoolBaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-register" />;
}
