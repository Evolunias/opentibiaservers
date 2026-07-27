import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-official');
}

export default function ActiveBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-official" />;
}
