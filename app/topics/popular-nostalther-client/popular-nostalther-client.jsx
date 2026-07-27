import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-client');
}

export default function PopularNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-client" />;
}
