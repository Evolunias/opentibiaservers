import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-pvp-server');
}

export default function InfernalOt13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-pvp-server" />;
}
