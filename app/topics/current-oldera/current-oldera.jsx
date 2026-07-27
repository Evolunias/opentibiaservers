import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera');
}

export default function CurrentOlderaKeywordPage() {
  return <StaticKeywordPage slug="current-oldera" />;
}
