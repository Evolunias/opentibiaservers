import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-1-old-school-server');
}

export default function BaiakIlusion71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-1-old-school-server" />;
}
