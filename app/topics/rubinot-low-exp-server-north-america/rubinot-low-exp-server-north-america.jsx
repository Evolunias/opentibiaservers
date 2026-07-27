import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-north-america');
}

export default function RubinotLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-north-america" />;
}
