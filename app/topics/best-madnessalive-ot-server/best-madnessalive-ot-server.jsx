import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-ot-server');
}

export default function BestMadnessaliveOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-ot-server" />;
}
