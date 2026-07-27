import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-europe-server');
}

export default function ElderaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-europe-server" />;
}
