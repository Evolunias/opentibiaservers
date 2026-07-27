import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-sweden');
}

export default function BaiakIlusionNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-sweden" />;
}
