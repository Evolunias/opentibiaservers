import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-ot-server');
}

export default function CurrentMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-ot-server" />;
}
