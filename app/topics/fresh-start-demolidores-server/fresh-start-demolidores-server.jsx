import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-server');
}

export default function FreshStartDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-server" />;
}
