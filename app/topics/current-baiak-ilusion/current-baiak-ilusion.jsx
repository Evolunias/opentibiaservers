import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion');
}

export default function CurrentBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion" />;
}
