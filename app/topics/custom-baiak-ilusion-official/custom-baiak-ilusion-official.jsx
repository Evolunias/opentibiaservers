import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-official');
}

export default function CustomBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-official" />;
}
