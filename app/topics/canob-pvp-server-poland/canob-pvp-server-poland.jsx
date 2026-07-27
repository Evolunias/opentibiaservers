import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-poland');
}

export default function CanobPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-poland" />;
}
