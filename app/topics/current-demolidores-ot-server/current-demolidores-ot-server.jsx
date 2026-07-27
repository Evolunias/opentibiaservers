import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-ot-server');
}

export default function CurrentDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-ot-server" />;
}
