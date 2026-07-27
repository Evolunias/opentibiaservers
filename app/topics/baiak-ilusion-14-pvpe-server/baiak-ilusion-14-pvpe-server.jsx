import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-pvpe-server');
}

export default function BaiakIlusion14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-pvpe-server" />;
}
