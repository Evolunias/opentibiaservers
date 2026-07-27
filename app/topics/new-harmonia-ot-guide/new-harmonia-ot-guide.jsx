import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-guide');
}

export default function NewHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-guide" />;
}
