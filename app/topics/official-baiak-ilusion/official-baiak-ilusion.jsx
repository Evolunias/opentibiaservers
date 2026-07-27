import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion');
}

export default function OfficialBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion" />;
}
