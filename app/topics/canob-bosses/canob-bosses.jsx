import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-bosses');
}

export default function CanobBossesKeywordPage() {
  return <StaticKeywordPage slug="canob-bosses" />;
}
