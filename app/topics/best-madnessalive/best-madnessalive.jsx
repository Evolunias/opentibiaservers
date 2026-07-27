import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive');
}

export default function BestMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive" />;
}
