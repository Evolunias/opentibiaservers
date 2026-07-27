import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-latin-america');
}

export default function InfernalOtNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-latin-america" />;
}
