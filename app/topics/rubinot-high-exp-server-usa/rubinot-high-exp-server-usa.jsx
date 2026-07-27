import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-usa');
}

export default function RubinotHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-usa" />;
}
