import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-server');
}

export default function TopDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-server" />;
}
