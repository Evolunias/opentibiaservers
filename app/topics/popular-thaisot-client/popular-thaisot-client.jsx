import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-client');
}

export default function PopularThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-client" />;
}
