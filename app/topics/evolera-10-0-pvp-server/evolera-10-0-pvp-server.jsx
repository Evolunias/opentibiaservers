import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-pvp-server');
}

export default function Evolera100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-pvp-server" />;
}
