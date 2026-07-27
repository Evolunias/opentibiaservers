import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-north-america-servers');
}

export default function OlderaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-north-america-servers" />;
}
