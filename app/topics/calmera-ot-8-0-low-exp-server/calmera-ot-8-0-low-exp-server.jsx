import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-0-low-exp-server');
}

export default function CalmeraOt80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-0-low-exp-server" />;
}
