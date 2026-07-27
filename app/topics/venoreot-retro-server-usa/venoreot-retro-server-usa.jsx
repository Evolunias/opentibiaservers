import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-usa');
}

export default function VenoreotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-usa" />;
}
