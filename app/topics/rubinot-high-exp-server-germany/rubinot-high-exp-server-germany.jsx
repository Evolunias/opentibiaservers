import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-germany');
}

export default function RubinotHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-germany" />;
}
