import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera');
}

export default function FreshStartOlderaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera" />;
}
