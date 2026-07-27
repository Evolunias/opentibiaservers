import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-login');
}

export default function PopularDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-login" />;
}
