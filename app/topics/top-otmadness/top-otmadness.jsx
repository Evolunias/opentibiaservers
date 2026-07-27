import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness');
}

export default function TopOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness" />;
}
