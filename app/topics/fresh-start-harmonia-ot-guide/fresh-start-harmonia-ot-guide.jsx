import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-guide');
}

export default function FreshStartHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-guide" />;
}
