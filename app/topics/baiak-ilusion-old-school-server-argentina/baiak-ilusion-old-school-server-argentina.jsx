import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-argentina');
}

export default function BaiakIlusionOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-argentina" />;
}
