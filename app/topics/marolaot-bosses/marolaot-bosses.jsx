import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-bosses');
}

export default function MarolaotBossesKeywordPage() {
  return <StaticKeywordPage slug="marolaot-bosses" />;
}
