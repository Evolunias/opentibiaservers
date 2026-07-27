import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-north-america');
}

export default function RubinotHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-north-america" />;
}
