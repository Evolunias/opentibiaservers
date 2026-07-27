import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-pvp-server');
}

export default function Canob71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-pvp-server" />;
}
