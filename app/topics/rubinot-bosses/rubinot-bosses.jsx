import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-bosses');
}

export default function RubinotBossesKeywordPage() {
  return <StaticKeywordPage slug="rubinot-bosses" />;
}
