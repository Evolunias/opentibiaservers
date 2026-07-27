import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp-server-sweden');
}

export default function BaiakIlusionPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp-server-sweden" />;
}
