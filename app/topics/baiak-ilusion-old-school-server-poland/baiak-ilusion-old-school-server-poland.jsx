import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-poland');
}

export default function BaiakIlusionOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-poland" />;
}
