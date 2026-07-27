import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-south-america');
}

export default function InfernalOtPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-south-america" />;
}
