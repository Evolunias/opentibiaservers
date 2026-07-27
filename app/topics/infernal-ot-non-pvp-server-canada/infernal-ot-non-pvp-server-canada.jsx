import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-canada');
}

export default function InfernalOtNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-canada" />;
}
