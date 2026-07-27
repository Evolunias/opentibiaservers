import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-server-europe');
}

export default function BaiakIlusionPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-server-europe" />;
}
