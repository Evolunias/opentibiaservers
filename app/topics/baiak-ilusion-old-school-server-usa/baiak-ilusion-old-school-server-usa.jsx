import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-usa');
}

export default function BaiakIlusionOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-usa" />;
}
