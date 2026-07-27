import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-pvp-server');
}

export default function Canob12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-pvp-server" />;
}
