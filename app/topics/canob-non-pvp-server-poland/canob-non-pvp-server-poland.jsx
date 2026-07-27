import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-poland');
}

export default function CanobNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-poland" />;
}
