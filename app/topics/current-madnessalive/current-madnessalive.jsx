import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive');
}

export default function CurrentMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive" />;
}
