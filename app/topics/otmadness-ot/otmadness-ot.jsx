import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-ot');
}

export default function OtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="otmadness-ot" />;
}
