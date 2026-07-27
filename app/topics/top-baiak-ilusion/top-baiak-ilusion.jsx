import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion');
}

export default function TopBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion" />;
}
