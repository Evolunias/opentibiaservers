import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-ots');
}

export default function CurrentMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-ots" />;
}
