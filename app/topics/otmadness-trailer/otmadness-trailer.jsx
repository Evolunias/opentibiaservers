import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-trailer');
}

export default function OtmadnessTrailerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-trailer" />;
}
