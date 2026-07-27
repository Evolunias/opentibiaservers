import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-private-server');
}

export default function VenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-private-server" />;
}
