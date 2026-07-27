import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-high-exp');
}

export default function BaiakIlusionHighExpKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-high-exp" />;
}
