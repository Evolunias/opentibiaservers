import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-europe');
}

export default function RubinotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-europe" />;
}
