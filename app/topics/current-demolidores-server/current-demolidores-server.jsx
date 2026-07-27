import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-server');
}

export default function CurrentDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-server" />;
}
