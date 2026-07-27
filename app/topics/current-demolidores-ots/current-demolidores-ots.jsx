import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-ots');
}

export default function CurrentDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-ots" />;
}
