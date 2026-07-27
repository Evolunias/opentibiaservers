import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-europe-servers');
}

export default function OlderaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-europe-servers" />;
}
