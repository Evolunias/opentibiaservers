import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-pvp-server');
}

export default function Oxygenot11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-pvp-server" />;
}
