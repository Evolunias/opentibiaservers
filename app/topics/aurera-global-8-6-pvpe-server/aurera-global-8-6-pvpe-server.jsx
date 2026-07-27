import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-6-pvpe-server');
}

export default function AureraGlobal86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-6-pvpe-server" />;
}
