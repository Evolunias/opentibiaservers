import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-wars');
}

export default function OtmadnessWarsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-wars" />;
}
