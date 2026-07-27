import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-market');
}

export default function MadnessaliveMarketKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-market" />;
}
