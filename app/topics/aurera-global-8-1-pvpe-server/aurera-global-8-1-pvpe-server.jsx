import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-1-pvpe-server');
}

export default function AureraGlobal81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-1-pvpe-server" />;
}
