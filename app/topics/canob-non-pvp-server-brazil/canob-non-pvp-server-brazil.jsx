import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-brazil');
}

export default function CanobNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-brazil" />;
}
