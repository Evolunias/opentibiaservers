import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-client');
}

export default function FreshStartOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-client" />;
}
