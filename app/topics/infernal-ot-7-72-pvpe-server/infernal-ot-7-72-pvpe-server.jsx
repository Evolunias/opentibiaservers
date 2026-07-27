import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-pvpe-server');
}

export default function InfernalOt772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-pvpe-server" />;
}
