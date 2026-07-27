import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-pvpe-server');
}

export default function InfernalOt13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-pvpe-server" />;
}
