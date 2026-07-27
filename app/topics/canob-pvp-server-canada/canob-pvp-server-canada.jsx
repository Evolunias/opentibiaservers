import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-canada');
}

export default function CanobPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-canada" />;
}
