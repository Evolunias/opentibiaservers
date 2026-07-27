import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-bosses');
}

export default function VenoreotBossesKeywordPage() {
  return <StaticKeywordPage slug="venoreot-bosses" />;
}
