import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-server');
}

export default function BestCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-server" />;
}
