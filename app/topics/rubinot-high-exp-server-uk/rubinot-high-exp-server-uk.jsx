import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-uk');
}

export default function RubinotHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-uk" />;
}
