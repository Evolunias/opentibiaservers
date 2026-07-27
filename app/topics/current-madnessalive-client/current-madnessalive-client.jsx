import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-client');
}

export default function CurrentMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-client" />;
}
