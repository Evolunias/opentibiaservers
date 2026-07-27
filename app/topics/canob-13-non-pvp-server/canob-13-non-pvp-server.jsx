import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-non-pvp-server');
}

export default function Canob13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-non-pvp-server" />;
}
