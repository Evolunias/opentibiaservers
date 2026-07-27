import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-latin-america');
}

export default function RubinotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-latin-america" />;
}
