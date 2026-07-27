import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-pvp-server');
}

export default function InfernalOt12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-pvp-server" />;
}
