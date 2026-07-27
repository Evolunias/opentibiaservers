import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-server');
}

export default function CurrentMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-server" />;
}
