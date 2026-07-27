import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-pvp-server');
}

export default function Canob15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-pvp-server" />;
}
