import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp');
}

export default function VenoreotHighExpKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp" />;
}
