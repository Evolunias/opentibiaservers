import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-france');
}

export default function InfernalOtNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-france" />;
}
