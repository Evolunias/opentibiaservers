import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-usa-server');
}

export default function VenoreotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-usa-server" />;
}
