import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-pvpe-server');
}

export default function Empirebr11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-pvpe-server" />;
}
