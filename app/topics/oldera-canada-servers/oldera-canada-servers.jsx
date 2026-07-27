import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-canada-servers');
}

export default function OlderaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-canada-servers" />;
}
