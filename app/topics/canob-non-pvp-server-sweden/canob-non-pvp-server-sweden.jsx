import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-sweden');
}

export default function CanobNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-sweden" />;
}
