import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-pvp-server');
}

export default function InfernalOt15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-pvp-server" />;
}
