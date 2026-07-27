import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-ot');
}

export default function BestOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-ot" />;
}
