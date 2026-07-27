import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-private-server');
}

export default function BestOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-private-server" />;
}
