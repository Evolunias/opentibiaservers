import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-server');
}

export default function PopularThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-server" />;
}
