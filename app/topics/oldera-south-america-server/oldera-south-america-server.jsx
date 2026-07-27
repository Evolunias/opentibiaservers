import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-south-america-server');
}

export default function OlderaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-south-america-server" />;
}
