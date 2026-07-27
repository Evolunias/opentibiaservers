import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-official');
}

export default function BestBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-official" />;
}
