import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-low-exp-server-poland');
}

export default function BaiakIlusionLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-low-exp-server-poland" />;
}
