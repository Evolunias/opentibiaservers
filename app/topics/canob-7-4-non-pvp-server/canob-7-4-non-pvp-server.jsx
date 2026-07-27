import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-non-pvp-server');
}

export default function Canob74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-non-pvp-server" />;
}
