import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-calmera-ot-server');
}

export default function HighExpCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-calmera-ot-server" />;
}
