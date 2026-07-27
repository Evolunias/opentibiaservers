import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-low-exp-server');
}

export default function CalmeraOt71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-low-exp-server" />;
}
