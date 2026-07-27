import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-pvpe-server');
}

export default function AureraGlobal15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-pvpe-server" />;
}
