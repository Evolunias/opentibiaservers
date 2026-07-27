import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-old-school-server');
}

export default function BaiakIlusion14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-old-school-server" />;
}
