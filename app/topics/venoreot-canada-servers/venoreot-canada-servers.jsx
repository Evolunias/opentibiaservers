import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-canada-servers');
}

export default function VenoreotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-canada-servers" />;
}
