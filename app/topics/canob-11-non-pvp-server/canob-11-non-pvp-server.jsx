import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-non-pvp-server');
}

export default function Canob11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-non-pvp-server" />;
}
