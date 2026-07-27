import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-pvpe-server');
}

export default function Empirebr96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-pvpe-server" />;
}
