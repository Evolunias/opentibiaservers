import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot');
}

export default function VenoreotKeywordPage() {
  return <StaticKeywordPage slug="venoreot" />;
}
