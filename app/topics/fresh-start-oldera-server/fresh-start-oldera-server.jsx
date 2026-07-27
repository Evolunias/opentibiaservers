import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-server');
}

export default function FreshStartOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-server" />;
}
