import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-canada');
}

export default function RubinotLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-canada" />;
}
