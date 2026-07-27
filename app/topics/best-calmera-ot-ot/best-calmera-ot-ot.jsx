import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-ot');
}

export default function BestCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-ot" />;
}
