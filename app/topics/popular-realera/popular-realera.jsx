import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera');
}

export default function PopularRealeraKeywordPage() {
  return <StaticKeywordPage slug="popular-realera" />;
}
