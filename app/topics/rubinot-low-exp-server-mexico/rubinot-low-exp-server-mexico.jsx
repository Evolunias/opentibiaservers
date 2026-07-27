import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-mexico');
}

export default function RubinotLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-mexico" />;
}
