import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-ot-server');
}

export default function PopularDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-ot-server" />;
}
