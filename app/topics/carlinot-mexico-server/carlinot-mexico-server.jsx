import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-mexico-server');
}

export default function CarlinotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-mexico-server" />;
}
