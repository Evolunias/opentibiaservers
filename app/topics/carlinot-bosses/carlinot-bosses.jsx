import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-bosses');
}

export default function CarlinotBossesKeywordPage() {
  return <StaticKeywordPage slug="carlinot-bosses" />;
}
