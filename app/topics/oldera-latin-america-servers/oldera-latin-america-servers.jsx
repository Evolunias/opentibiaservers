import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-latin-america-servers');
}

export default function OlderaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-latin-america-servers" />;
}
