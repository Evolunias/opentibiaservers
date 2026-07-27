import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-9-6-high-exp-server');
}

export default function CalmeraOt96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-9-6-high-exp-server" />;
}
