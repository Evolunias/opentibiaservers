import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-north-america');
}

export default function CanobPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-north-america" />;
}
