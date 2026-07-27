import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores');
}

export default function CurrentDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores" />;
}
