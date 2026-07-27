import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-client');
}

export default function BestBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-client" />;
}
