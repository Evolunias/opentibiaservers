import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-latin-america-server');
}

export default function ThaisotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-latin-america-server" />;
}
