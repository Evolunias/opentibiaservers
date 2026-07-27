import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-client');
}

export default function PopularRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-client" />;
}
