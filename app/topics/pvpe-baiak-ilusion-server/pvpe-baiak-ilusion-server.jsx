import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-baiak-ilusion-server');
}

export default function PvpeBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-baiak-ilusion-server" />;
}
