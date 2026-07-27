import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-server');
}

export default function BestThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-server" />;
}
