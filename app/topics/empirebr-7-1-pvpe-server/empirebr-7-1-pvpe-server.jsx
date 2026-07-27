import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-pvpe-server');
}

export default function Empirebr71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-pvpe-server" />;
}
