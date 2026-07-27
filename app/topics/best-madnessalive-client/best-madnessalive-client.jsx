import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-client');
}

export default function BestMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-client" />;
}
