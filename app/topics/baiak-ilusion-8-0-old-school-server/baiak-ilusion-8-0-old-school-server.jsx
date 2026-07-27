import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-0-old-school-server');
}

export default function BaiakIlusion80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-0-old-school-server" />;
}
