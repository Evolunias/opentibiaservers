import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-mexico-servers');
}

export default function CarlinotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-mexico-servers" />;
}
