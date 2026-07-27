import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera');
}

export default function BestBlazeraKeywordPage() {
  return <StaticKeywordPage slug="best-blazera" />;
}
