import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-low-exp-server');
}

export default function CalmeraOt76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-low-exp-server" />;
}
