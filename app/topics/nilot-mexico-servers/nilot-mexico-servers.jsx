import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-mexico-servers');
}

export default function NilotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-mexico-servers" />;
}
