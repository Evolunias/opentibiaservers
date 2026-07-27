import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-0-high-exp-server');
}

export default function CalmeraOt80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-0-high-exp-server" />;
}
