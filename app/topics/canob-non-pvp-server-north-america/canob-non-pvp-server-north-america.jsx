import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-north-america');
}

export default function CanobNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-north-america" />;
}
