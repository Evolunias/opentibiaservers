import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-europe');
}

export default function BaiakIlusionNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-europe" />;
}
