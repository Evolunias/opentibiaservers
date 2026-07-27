import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-guide');
}

export default function ActiveHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-guide" />;
}
