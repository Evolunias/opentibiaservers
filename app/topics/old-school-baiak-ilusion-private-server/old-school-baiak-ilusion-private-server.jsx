import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-private-server');
}

export default function OldSchoolBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-private-server" />;
}
