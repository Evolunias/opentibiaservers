import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-ot-server');
}

export default function OldSchoolBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-ot-server" />;
}
