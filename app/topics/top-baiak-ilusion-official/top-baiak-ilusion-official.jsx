import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-official');
}

export default function TopBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-official" />;
}
