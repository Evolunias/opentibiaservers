import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-guide');
}

export default function HarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-guide" />;
}
