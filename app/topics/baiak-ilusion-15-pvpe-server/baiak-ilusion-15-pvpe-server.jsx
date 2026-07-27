import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-pvpe-server');
}

export default function BaiakIlusion15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-pvpe-server" />;
}
