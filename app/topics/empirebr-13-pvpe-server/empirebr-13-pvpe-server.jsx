import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-pvpe-server');
}

export default function Empirebr13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-pvpe-server" />;
}
