import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-germany');
}

export default function CanobNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-germany" />;
}
