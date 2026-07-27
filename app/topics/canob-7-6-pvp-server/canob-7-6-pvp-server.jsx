import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-pvp-server');
}

export default function Canob76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-pvp-server" />;
}
