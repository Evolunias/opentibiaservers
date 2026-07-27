import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-mexico-servers');
}

export default function ThaisotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-mexico-servers" />;
}
