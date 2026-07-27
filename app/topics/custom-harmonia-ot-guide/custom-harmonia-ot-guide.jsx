import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-guide');
}

export default function CustomHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-guide" />;
}
