import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-non-pvp-server');
}

export default function Canob12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-non-pvp-server" />;
}
