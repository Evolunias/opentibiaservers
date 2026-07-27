import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-pvp-server');
}

export default function InfernalOt14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-pvp-server" />;
}
