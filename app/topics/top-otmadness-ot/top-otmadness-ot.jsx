import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-ot');
}

export default function TopOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-ot" />;
}
