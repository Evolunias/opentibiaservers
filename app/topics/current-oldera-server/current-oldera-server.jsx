import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-server');
}

export default function CurrentOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-server" />;
}
