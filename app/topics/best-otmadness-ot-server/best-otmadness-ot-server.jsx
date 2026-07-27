import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-ot-server');
}

export default function BestOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-ot-server" />;
}
