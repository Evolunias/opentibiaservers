import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-72-non-pvp-server');
}

export default function Canob772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-72-non-pvp-server" />;
}
