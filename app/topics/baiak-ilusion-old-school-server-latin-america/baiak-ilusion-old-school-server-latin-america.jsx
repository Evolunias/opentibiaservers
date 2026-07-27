import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-latin-america');
}

export default function BaiakIlusionOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-latin-america" />;
}
