import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-argentina');
}

export default function BaiakIlusionNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-argentina" />;
}
