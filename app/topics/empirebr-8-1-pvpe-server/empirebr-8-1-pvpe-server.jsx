import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-pvpe-server');
}

export default function Empirebr81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-pvpe-server" />;
}
