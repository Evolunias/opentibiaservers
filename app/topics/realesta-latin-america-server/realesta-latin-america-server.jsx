import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-latin-america-server');
}

export default function RealestaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-latin-america-server" />;
}
