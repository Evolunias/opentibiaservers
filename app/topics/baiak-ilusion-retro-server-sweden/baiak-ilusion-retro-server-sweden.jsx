import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-sweden');
}

export default function BaiakIlusionRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-sweden" />;
}
