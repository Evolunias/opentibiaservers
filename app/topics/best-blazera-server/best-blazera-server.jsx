import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-server');
}

export default function BestBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-server" />;
}
