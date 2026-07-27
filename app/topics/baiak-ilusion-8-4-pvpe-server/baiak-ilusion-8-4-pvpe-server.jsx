import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-4-pvpe-server');
}

export default function BaiakIlusion84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-4-pvpe-server" />;
}
