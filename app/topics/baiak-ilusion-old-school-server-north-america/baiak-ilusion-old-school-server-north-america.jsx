import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-north-america');
}

export default function BaiakIlusionOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-north-america" />;
}
