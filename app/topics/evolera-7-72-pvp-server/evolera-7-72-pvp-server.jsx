import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-pvp-server');
}

export default function Evolera772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-pvp-server" />;
}
