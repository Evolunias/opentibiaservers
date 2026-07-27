import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-poland');
}

export default function BaiakIlusionNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-poland" />;
}
