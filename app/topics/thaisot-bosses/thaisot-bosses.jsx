import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-bosses');
}

export default function ThaisotBossesKeywordPage() {
  return <StaticKeywordPage slug="thaisot-bosses" />;
}
