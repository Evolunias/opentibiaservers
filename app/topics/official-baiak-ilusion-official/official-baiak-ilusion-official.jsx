import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-official');
}

export default function OfficialBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-official" />;
}
