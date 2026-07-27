import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-server');
}

export default function BestMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-server" />;
}
