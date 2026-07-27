import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-non-pvp-server');
}

export default function InfernalOt11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-non-pvp-server" />;
}
