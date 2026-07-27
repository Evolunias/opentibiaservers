import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-south-america');
}

export default function InfernalOtNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-south-america" />;
}
