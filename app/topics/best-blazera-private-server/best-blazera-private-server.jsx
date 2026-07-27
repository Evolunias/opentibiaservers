import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-private-server');
}

export default function BestBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-private-server" />;
}
