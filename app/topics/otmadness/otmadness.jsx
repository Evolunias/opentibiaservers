import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness');
}

export default function OtmadnessKeywordPage() {
  return <StaticKeywordPage slug="otmadness" />;
}
