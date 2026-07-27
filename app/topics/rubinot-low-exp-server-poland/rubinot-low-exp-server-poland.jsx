import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-poland');
}

export default function RubinotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-poland" />;
}
