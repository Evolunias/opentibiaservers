import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-status');
}

export default function OtmadnessStatusKeywordPage() {
  return <StaticKeywordPage slug="otmadness-status" />;
}
