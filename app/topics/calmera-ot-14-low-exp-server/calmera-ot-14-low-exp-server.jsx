import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-low-exp-server');
}

export default function CalmeraOt14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-low-exp-server" />;
}
