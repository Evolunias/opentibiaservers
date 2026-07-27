import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-brazil-servers');
}

export default function NilotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-brazil-servers" />;
}
