import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-mexico');
}

export default function VenoreotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-mexico" />;
}
