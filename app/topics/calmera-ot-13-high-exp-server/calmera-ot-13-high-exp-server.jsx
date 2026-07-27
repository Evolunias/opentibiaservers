import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-high-exp-server');
}

export default function CalmeraOt13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-high-exp-server" />;
}
