import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-low-exp-server');
}

export default function CalmeraOt1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-low-exp-server" />;
}
