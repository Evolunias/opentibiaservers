import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-germany');
}

export default function CanobPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-germany" />;
}
