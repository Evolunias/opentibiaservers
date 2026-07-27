import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-uk');
}

export default function CanobNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-uk" />;
}
