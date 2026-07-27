import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-latin-america-servers');
}

export default function RealestaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-latin-america-servers" />;
}
