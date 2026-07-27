import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-server');
}

export default function BestDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-server" />;
}
