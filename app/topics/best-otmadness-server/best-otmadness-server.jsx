import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-server');
}

export default function BestOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-server" />;
}
