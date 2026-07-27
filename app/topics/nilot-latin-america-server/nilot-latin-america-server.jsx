import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-latin-america-server');
}

export default function NilotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-latin-america-server" />;
}
