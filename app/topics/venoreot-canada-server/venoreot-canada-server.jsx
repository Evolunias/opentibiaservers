import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-canada-server');
}

export default function VenoreotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-canada-server" />;
}
