import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-poland');
}

export default function RubinotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-poland" />;
}
