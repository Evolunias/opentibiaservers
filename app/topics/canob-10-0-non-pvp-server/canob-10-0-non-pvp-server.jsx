import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-non-pvp-server');
}

export default function Canob100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-non-pvp-server" />;
}
