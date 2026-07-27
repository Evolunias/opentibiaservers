import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-client');
}

export default function CurrentOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-client" />;
}
