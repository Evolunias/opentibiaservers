import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-0-pvpe-server');
}

export default function BaiakIlusion80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-0-pvpe-server" />;
}
