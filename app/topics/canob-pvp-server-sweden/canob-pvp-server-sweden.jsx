import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-sweden');
}

export default function CanobPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-sweden" />;
}
