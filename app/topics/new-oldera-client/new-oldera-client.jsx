import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-client');
}

export default function NewOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-client" />;
}
