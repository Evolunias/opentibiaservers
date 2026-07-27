import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-canob-server');
}

export default function PvpCanobServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-canob-server" />;
}
