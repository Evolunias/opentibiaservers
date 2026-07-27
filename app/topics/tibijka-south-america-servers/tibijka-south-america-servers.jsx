import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-south-america-servers');
}

export default function TibijkaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-south-america-servers" />;
}
