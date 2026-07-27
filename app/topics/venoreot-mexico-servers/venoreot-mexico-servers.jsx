import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-mexico-servers');
}

export default function VenoreotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-mexico-servers" />;
}
