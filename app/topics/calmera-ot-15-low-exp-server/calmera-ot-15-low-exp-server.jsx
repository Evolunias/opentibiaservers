import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-low-exp-server');
}

export default function CalmeraOt15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-low-exp-server" />;
}
