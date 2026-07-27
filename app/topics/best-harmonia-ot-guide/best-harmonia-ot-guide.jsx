import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-guide');
}

export default function BestHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-guide" />;
}
