import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-client');
}

export default function PopularRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-client" />;
}
