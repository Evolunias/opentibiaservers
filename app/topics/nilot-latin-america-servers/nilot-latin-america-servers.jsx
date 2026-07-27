import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-latin-america-servers');
}

export default function NilotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-latin-america-servers" />;
}
