import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-pvpe-server');
}

export default function Empirebr100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-pvpe-server" />;
}
