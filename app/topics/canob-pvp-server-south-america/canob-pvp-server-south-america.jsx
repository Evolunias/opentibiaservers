import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-south-america');
}

export default function CanobPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-south-america" />;
}
