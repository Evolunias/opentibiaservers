import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-latin-america');
}

export default function InfernalOtPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-latin-america" />;
}
