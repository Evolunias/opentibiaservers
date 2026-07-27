import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-latin-america-server');
}

export default function MidhemLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-latin-america-server" />;
}
