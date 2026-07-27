import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-mexico-server');
}

export default function NilotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-mexico-server" />;
}
