import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-pvp-server');
}

export default function Oxygenot12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-pvp-server" />;
}
