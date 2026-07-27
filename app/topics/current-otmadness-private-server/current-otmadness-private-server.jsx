import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-private-server');
}

export default function CurrentOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-private-server" />;
}
