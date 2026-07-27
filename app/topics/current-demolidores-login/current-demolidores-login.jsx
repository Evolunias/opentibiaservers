import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-login');
}

export default function CurrentDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-login" />;
}
