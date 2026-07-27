import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-mexico-server');
}

export default function ThaisotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-mexico-server" />;
}
