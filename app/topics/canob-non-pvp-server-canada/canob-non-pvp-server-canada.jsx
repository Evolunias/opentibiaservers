import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-canada');
}

export default function CanobNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-canada" />;
}
