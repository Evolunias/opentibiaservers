import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-10-0-old-school-server');
}

export default function BaiakIlusion100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-10-0-old-school-server" />;
}
