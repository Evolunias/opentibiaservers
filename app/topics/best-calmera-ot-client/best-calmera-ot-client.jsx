import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-client');
}

export default function BestCalmeraOtClientKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-client" />;
}
