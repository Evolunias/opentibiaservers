import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-server');
}

export default function PopularDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-server" />;
}
