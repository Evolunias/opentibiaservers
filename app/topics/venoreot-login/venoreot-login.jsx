import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-login');
}

export default function VenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="venoreot-login" />;
}
