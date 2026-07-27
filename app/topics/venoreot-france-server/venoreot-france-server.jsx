import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-france-server');
}

export default function VenoreotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-france-server" />;
}
