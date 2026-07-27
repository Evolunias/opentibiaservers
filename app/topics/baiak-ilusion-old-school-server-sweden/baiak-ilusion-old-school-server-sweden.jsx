import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-sweden');
}

export default function BaiakIlusionOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-sweden" />;
}
