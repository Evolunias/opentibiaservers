import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-sweden');
}

export default function InfernalOtNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-sweden" />;
}
