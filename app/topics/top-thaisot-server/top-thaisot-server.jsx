import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-server');
}

export default function TopThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-server" />;
}
