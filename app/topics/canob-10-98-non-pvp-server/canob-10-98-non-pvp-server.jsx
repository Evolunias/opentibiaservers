import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-non-pvp-server');
}

export default function Canob1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-non-pvp-server" />;
}
