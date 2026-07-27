import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-europe-servers');
}

export default function ElderaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-europe-servers" />;
}
