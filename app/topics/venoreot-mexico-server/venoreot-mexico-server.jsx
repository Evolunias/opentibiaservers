import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-mexico-server');
}

export default function VenoreotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-mexico-server" />;
}
