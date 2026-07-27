import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-reset');
}

export default function VenoreotResetKeywordPage() {
  return <StaticKeywordPage slug="venoreot-reset" />;
}
