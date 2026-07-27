import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-pvp-server');
}

export default function Evolera86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-pvp-server" />;
}
