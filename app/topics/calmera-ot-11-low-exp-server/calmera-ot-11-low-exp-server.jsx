import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-low-exp-server');
}

export default function CalmeraOt11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-low-exp-server" />;
}
