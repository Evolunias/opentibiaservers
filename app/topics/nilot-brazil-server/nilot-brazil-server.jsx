import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-brazil-server');
}

export default function NilotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-brazil-server" />;
}
