import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-pvpe-server');
}

export default function InfernalOt15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-pvpe-server" />;
}
