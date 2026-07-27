import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-high-exp-server');
}

export default function CalmeraOt12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-high-exp-server" />;
}
