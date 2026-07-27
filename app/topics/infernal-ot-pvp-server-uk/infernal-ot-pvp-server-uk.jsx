import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-uk');
}

export default function InfernalOtPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-uk" />;
}
