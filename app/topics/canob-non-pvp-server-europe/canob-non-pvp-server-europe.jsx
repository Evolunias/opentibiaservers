import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-europe');
}

export default function CanobNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-europe" />;
}
