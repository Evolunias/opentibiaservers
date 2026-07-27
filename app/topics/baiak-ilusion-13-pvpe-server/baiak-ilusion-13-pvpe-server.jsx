import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-13-pvpe-server');
}

export default function BaiakIlusion13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-13-pvpe-server" />;
}
