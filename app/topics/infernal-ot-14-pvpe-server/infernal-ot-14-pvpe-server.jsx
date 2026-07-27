import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-pvpe-server');
}

export default function InfernalOt14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-pvpe-server" />;
}
