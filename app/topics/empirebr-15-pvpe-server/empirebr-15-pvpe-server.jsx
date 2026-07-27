import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-pvpe-server');
}

export default function Empirebr15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-pvpe-server" />;
}
