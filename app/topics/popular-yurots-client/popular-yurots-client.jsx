import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-client');
}

export default function PopularYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-client" />;
}
