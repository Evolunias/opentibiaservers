import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-client');
}

export default function CurrentDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-client" />;
}
