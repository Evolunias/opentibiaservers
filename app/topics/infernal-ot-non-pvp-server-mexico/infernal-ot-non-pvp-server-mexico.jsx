import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-mexico');
}

export default function InfernalOtNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-mexico" />;
}
