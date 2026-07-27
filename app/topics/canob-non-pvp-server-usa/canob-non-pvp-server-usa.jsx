import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-usa');
}

export default function CanobNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-usa" />;
}
