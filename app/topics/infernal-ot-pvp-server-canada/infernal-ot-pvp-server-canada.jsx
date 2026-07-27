import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-canada');
}

export default function InfernalOtPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-canada" />;
}
