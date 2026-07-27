import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-mexico-servers');
}

export default function RubinotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-mexico-servers" />;
}
