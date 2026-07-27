import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-south-america-servers');
}

export default function OlderaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-south-america-servers" />;
}
