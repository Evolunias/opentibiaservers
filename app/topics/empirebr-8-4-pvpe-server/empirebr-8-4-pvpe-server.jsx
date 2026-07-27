import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-pvpe-server');
}

export default function Empirebr84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-pvpe-server" />;
}
