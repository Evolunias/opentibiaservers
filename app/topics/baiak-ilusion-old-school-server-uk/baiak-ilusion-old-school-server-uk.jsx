import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-uk');
}

export default function BaiakIlusionOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-uk" />;
}
