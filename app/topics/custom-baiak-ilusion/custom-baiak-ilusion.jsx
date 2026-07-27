import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion');
}

export default function CustomBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion" />;
}
