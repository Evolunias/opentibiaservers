import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-guide');
}

export default function TopHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-guide" />;
}
