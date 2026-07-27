import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-pvpe-server');
}

export default function BaiakIlusion11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-pvpe-server" />;
}
