import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-france-servers');
}

export default function VenoreotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-france-servers" />;
}
