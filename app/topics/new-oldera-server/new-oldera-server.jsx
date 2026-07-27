import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-server');
}

export default function NewOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-server" />;
}
