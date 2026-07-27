import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera');
}

export default function NewOlderaKeywordPage() {
  return <StaticKeywordPage slug="new-oldera" />;
}
