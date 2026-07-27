import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-uk');
}

export default function CanobPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-uk" />;
}
