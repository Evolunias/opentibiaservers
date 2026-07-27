import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-brazil');
}

export default function VenoreotRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-brazil" />;
}
