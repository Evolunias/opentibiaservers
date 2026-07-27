import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-ots');
}

export default function BestOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-ots" />;
}
