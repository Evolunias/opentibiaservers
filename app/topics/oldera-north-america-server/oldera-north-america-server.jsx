import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-north-america-server');
}

export default function OlderaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-north-america-server" />;
}
