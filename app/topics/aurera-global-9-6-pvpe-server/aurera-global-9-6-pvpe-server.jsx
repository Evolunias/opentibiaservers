import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-pvpe-server');
}

export default function AureraGlobal96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-pvpe-server" />;
}
