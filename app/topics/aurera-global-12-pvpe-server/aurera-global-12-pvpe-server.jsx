import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-pvpe-server');
}

export default function AureraGlobal12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-pvpe-server" />;
}
