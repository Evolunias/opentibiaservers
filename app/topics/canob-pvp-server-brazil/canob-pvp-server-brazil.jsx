import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-brazil');
}

export default function CanobPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-brazil" />;
}
