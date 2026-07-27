import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-uk');
}

export default function InfernalOtNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-uk" />;
}
