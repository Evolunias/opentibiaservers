import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-pvpe-server');
}

export default function InfernalOt100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-pvpe-server" />;
}
