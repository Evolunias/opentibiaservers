import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-high-exp-server');
}

export default function CalmeraOt76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-high-exp-server" />;
}
