import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-france');
}

export default function InfernalOtPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-france" />;
}
