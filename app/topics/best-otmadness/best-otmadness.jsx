import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness');
}

export default function BestOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness" />;
}
