import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-9-6-pvpe-server');
}

export default function BaiakIlusion96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-9-6-pvpe-server" />;
}
