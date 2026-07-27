import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-history');
}

export default function AsteraHistoryKeywordPage() {
  return <StaticKeywordPage slug="astera-history" />;
}
