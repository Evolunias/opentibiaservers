import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-south-america');
}

export default function CanobNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-south-america" />;
}
