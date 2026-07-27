import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-official');
}

export default function PopularBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-official" />;
}
