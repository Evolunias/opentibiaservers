import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-pvp-server');
}

export default function Canob13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-pvp-server" />;
}
