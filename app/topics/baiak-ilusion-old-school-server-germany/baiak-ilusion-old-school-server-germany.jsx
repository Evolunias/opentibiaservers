import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-germany');
}

export default function BaiakIlusionOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-germany" />;
}
