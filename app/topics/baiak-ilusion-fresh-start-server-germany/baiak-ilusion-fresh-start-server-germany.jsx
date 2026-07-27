import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-fresh-start-server-germany');
}

export default function BaiakIlusionFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-fresh-start-server-germany" />;
}
