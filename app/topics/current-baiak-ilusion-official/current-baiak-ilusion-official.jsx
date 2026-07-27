import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-official');
}

export default function CurrentBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-official" />;
}
