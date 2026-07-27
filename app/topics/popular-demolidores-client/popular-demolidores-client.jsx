import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-client');
}

export default function PopularDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-client" />;
}
