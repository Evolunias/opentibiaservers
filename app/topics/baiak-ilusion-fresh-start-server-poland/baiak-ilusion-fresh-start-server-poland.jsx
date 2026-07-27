import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-fresh-start-server-poland');
}

export default function BaiakIlusionFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-fresh-start-server-poland" />;
}
