import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-usa-servers');
}

export default function VenoreotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-usa-servers" />;
}
