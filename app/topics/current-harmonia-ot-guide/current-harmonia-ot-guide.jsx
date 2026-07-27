import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-guide');
}

export default function CurrentHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-guide" />;
}
