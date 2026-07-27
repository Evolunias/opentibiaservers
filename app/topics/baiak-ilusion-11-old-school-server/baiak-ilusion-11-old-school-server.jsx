import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-old-school-server');
}

export default function BaiakIlusion11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-old-school-server" />;
}
