import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-pvp-server');
}

export default function Evolera13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-pvp-server" />;
}
