import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-europe-server');
}

export default function OlderaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-europe-server" />;
}
