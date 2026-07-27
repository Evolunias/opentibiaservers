import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-latin-america-server');
}

export default function OlderaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-latin-america-server" />;
}
