import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-latin-america-servers');
}

export default function ThaisotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-latin-america-servers" />;
}
