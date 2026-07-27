import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-client');
}

export default function PopularTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-client" />;
}
