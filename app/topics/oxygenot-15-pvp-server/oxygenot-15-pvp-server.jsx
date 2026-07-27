import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-pvp-server');
}

export default function Oxygenot15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-pvp-server" />;
}
