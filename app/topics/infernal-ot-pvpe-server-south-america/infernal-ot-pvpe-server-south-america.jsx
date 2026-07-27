import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-south-america');
}

export default function InfernalOtPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-south-america" />;
}
