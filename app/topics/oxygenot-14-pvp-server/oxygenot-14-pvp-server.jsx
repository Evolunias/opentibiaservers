import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-pvp-server');
}

export default function Oxygenot14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-pvp-server" />;
}
