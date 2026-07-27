import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-pvp-server');
}

export default function InfernalOt11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-pvp-server" />;
}
