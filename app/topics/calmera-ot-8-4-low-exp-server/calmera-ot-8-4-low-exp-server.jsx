import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-low-exp-server');
}

export default function CalmeraOt84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-low-exp-server" />;
}
