import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-guide');
}

export default function PopularHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-guide" />;
}
