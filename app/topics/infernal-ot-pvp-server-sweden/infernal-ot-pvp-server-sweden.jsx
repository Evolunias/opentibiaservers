import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-sweden');
}

export default function InfernalOtPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-sweden" />;
}
