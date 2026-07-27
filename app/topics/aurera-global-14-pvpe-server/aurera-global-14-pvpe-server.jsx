import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-pvpe-server');
}

export default function AureraGlobal14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-pvpe-server" />;
}
