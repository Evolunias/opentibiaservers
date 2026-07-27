import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-pvp-server');
}

export default function Canob11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-pvp-server" />;
}
