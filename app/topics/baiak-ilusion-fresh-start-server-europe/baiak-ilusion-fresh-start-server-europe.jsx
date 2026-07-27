import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-fresh-start-server-europe');
}

export default function BaiakIlusionFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-fresh-start-server-europe" />;
}
