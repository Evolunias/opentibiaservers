import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-status');
}

export default function VenoreotStatusKeywordPage() {
  return <StaticKeywordPage slug="venoreot-status" />;
}
