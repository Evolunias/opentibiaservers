import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-ot');
}

export default function CurrentMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-ot" />;
}
