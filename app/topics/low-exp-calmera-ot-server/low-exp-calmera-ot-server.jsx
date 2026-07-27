import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-calmera-ot-server');
}

export default function LowExpCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-calmera-ot-server" />;
}
