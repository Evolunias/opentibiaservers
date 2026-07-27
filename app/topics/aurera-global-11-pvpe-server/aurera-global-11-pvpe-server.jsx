import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-pvpe-server');
}

export default function AureraGlobal11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-pvpe-server" />;
}
