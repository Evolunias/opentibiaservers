import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-client');
}

export default function OlderaClientKeywordPage() {
  return <StaticKeywordPage slug="oldera-client" />;
}
