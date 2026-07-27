import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-pvp-server');
}

export default function Oxygenot13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-pvp-server" />;
}
