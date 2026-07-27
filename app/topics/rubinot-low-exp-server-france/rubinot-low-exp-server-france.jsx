import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-france');
}

export default function RubinotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-france" />;
}
