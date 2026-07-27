import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-non-pvp-server');
}

export default function Canob96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-non-pvp-server" />;
}
