import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-pvp-server');
}

export default function InfernalOt100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-pvp-server" />;
}
