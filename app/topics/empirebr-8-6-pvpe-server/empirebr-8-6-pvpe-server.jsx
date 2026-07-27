import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-pvpe-server');
}

export default function Empirebr86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-pvpe-server" />;
}
