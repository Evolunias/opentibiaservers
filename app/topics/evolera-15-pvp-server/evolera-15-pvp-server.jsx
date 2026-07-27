import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-pvp-server');
}

export default function Evolera15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-pvp-server" />;
}
