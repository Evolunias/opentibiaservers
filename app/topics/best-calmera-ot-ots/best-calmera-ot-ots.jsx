import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-ots');
}

export default function BestCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-ots" />;
}
