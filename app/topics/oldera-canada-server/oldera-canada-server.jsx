import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-canada-server');
}

export default function OlderaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-canada-server" />;
}
