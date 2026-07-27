import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-server');
}

export default function OldSchoolBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-server" />;
}
