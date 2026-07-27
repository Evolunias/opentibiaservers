import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-0-non-pvp-server');
}

export default function Canob80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-0-non-pvp-server" />;
}
