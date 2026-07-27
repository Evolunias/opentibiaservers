import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-54-pvp-server');
}

export default function InfernalOt854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-54-pvp-server" />;
}
