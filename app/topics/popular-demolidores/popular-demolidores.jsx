import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores');
}

export default function PopularDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores" />;
}
