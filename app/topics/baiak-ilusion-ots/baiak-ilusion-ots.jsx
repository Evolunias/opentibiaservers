import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-ots');
}

export default function BaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-ots" />;
}
