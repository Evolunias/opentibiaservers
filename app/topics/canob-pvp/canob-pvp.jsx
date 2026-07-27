import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp');
}

export default function CanobPvpKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp" />;
}
