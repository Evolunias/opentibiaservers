import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-low-exp-server');
}

export default function CalmeraOt12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-low-exp-server" />;
}
