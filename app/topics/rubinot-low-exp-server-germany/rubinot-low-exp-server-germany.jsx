import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-germany');
}

export default function RubinotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-germany" />;
}
