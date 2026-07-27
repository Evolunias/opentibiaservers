import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-latin-america-servers');
}

export default function MidhemLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-latin-america-servers" />;
}
