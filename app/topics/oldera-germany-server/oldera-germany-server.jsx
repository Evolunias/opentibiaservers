import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-germany-server');
}

export default function OlderaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-germany-server" />;
}
