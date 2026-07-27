import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-france');
}

export default function RubinotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-france" />;
}
