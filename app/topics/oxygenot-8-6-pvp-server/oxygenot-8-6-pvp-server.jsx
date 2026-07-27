import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-pvp-server');
}

export default function Oxygenot86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-pvp-server" />;
}
