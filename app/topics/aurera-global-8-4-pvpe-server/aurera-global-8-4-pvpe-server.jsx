import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-4-pvpe-server');
}

export default function AureraGlobal84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-4-pvpe-server" />;
}
