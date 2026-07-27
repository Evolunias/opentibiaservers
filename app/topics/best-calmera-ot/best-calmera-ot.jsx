import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot');
}

export default function BestCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot" />;
}
