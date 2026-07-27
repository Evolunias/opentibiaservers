import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-pvpe-server');
}

export default function InfernalOt74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-pvpe-server" />;
}
