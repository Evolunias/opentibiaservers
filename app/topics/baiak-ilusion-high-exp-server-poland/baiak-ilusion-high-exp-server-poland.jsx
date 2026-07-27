import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-high-exp-server-poland');
}

export default function BaiakIlusionHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-high-exp-server-poland" />;
}
