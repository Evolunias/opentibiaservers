import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-mexico');
}

export default function InfernalOtPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-mexico" />;
}
