import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-official');
}

export default function FreshStartBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-official" />;
}
