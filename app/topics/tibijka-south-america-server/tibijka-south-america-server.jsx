import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-south-america-server');
}

export default function TibijkaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-south-america-server" />;
}
