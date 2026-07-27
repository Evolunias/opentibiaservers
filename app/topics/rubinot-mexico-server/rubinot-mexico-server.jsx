import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-mexico-server');
}

export default function RubinotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-mexico-server" />;
}
