import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-pvpe-server');
}

export default function Oxygenot14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-pvpe-server" />;
}
