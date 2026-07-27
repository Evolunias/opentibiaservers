import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-chile-server');
}

export default function OlderaChileServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-chile-server" />;
}
