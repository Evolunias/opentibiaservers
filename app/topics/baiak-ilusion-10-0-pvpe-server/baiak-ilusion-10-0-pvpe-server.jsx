import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-10-0-pvpe-server');
}

export default function BaiakIlusion100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-10-0-pvpe-server" />;
}
