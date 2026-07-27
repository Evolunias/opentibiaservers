import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-europe');
}

export default function BaiakIlusionOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-europe" />;
}
