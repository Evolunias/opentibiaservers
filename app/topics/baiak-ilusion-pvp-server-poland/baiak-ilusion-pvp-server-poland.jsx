import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-server-poland');
}

export default function BaiakIlusionPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-server-poland" />;
}
