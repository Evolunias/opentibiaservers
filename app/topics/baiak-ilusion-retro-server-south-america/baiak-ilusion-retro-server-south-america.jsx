import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-south-america');
}

export default function BaiakIlusionRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-south-america" />;
}
