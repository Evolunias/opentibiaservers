import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-argentina');
}

export default function RubinotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-argentina" />;
}
