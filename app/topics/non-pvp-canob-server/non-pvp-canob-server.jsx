import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-canob-server');
}

export default function NonPvpCanobServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-canob-server" />;
}
