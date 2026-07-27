import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-brazil');
}

export default function BaiakIlusionOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-brazil" />;
}
