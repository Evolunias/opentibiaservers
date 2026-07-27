import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-login');
}

export default function OldSchoolBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-login" />;
}
