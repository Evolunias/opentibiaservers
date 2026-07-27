import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-france');
}

export default function BaiakIlusionOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-france" />;
}
