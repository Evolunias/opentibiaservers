import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-pvp-server');
}

export default function Oxygenot76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-pvp-server" />;
}
