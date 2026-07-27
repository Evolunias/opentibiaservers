import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-pvpe-server');
}

export default function Empirebr76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-pvpe-server" />;
}
