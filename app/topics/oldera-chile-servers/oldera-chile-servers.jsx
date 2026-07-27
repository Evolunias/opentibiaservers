import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-chile-servers');
}

export default function OlderaChileServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-chile-servers" />;
}
