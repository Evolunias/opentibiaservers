import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-status');
}

export default function BaiakIlusionStatusKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-status" />;
}
