import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-non-pvp-server');
}

export default function Canob15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-non-pvp-server" />;
}
